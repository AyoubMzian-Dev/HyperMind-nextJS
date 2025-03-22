'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Trash2, Link as LinkIcon, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Task, TaskType, Step, Attachment, TaskLink } from '@/types/task'
import { toast } from 'sonner'

interface NewTaskFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (task: Omit<Task, 'taskId' | 'taskStatus' | 'taskCreatedDate'>) => Promise<void>
}

export function NewTaskForm({ isOpen, onClose, onSubmit }: NewTaskFormProps) {
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDescription: '',
    taskSubject: '',
    taskType: '' as TaskType,
    taskDueDate: '',
    taskDueTime: '',
    taskTags: [] as string[],
    taskSteps: [] as Step[],
    taskAttachments: [] as Attachment[],
    taskLinks: [] as TaskLink[],
    // UI state fields
    newTag: '',
    newStepTitle: '',
    newStepDescription: '',
    newAttachmentName: '',
    newAttachmentUrl: '',
    newLinkTitle: '',
    newLinkUrl: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Memoize the isFormValid function
  const isFormValid = useCallback(() => {
    // Only title is required
    const valid = Boolean(formData.taskTitle.trim())
    
    console.log('Form Validation:', {
      title: Boolean(formData.taskTitle.trim()),
      description: Boolean(formData.taskDescription.trim()),
      subject: Boolean(formData.taskSubject.trim()),
      type: Boolean(formData.taskType),
      dueDate: Boolean(formData.taskDueDate),
      dueTime: Boolean(formData.taskDueTime),
      tags: formData.taskTags.length > 0,
      steps: formData.taskSteps.length > 0
    })
    
    return valid
  }, [formData])

  // Debug form state
  useEffect(() => {
    console.log('Form Data:', formData)
    console.log('Is Submitting:', isSubmitting)
    console.log('Is Form Valid:', isFormValid())
  }, [formData, isSubmitting, isFormValid])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    try {
      // Extract only the task data fields (excluding UI state fields)
      const taskData = {
        taskTitle: formData.taskTitle,
        taskDescription: formData.taskDescription,
        taskSubject: formData.taskSubject,
        taskType: formData.taskType,
        taskDueDate: formData.taskDueDate,
        taskDueTime: formData.taskDueTime,
        taskTags: formData.taskTags,
        taskSteps: formData.taskSteps,
        taskAttachments: formData.taskAttachments,
        taskLinks: formData.taskLinks,
      }

      await onSubmit(taskData)
      toast.success('Task created successfully!')
      onClose()
      setFormData({
        taskTitle: '',
        taskDescription: '',
        taskSubject: '',
        taskType: '' as TaskType,
        taskDueDate: '',
        taskDueTime: '',
        taskTags: [],
        taskSteps: [],
        taskAttachments: [],
        taskLinks: [],
        newTag: '',
        newStepTitle: '',
        newStepDescription: '',
        newAttachmentName: '',
        newAttachmentUrl: '',
        newLinkTitle: '',
        newLinkUrl: ''
      })
    } catch (error) {
      console.error('Failed to create task:', error)
      toast.error('Failed to create task. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Tag Handlers
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && formData.newTag.trim()) {
      e.preventDefault()
      setFormData(prev => ({
        ...prev,
        taskTags: [...prev.taskTags, prev.newTag.trim()],
        newTag: ''
      }))
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      taskTags: prev.taskTags.filter(tag => tag !== tagToRemove)
    }))
  }

  // Step Handlers
  const handleAddStep = () => {
    if (!formData.newStepTitle.trim()) {
      toast.error('Step title is required')
      return
    }

    const newStep: Step = {
      stepId: Date.now(), // Temporary ID
      stepTitle: formData.newStepTitle.trim(),
      stepDescription: formData.newStepDescription.trim(),
      stepCompleted: false
    }

    setFormData(prev => ({
      ...prev,
      taskSteps: [...prev.taskSteps, newStep],
      newStepTitle: '',
      newStepDescription: ''
    }))
  }

  const removeStep = (stepId: number) => {
    setFormData(prev => ({
      ...prev,
      taskSteps: prev.taskSteps.filter(step => step.stepId !== stepId)
    }))
  }

  // Attachment Handlers
  const handleAddAttachment = () => {
    if (!formData.newAttachmentName.trim() || !formData.newAttachmentUrl.trim()) {
      toast.error('Attachment name and URL are required')
      return
    }

    const newAttachment: Attachment = {
      id: Date.now(), // Temporary ID
      name: formData.newAttachmentName.trim(),
      url: formData.newAttachmentUrl.trim()
    }

    setFormData(prev => ({
      ...prev,
      taskAttachments: [...prev.taskAttachments, newAttachment],
      newAttachmentName: '',
      newAttachmentUrl: ''
    }))
  }

  const removeAttachment = (id: number) => {
    setFormData(prev => ({
      ...prev,
      taskAttachments: prev.taskAttachments.filter(attachment => attachment.id !== id)
    }))
  }

  // Link Handlers
  const handleAddLink = () => {
    if (!formData.newLinkTitle.trim() || !formData.newLinkUrl.trim()) {
      toast.error('Link title and URL are required')
      return
    }

    // Basic URL validation
    try {
      new URL(formData.newLinkUrl) // This will throw if invalid

      const newLink: TaskLink = {
        id: Date.now(), // Temporary ID
        title: formData.newLinkTitle.trim(),
        url: formData.newLinkUrl.trim()
      }

      setFormData(prev => ({
        ...prev,
        taskLinks: [...prev.taskLinks, newLink],
        newLinkTitle: '',
        newLinkUrl: ''
      }))
    } catch (error) {
      toast.error('Please enter a valid URL (include http:// or https://)')
      console.log(error)
    }
  }

  const removeLink = (id: number) => {
    setFormData(prev => ({
      ...prev,
      taskLinks: prev.taskLinks.filter(link => link.id !== id)
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-0 top-0 mt-12 h-full w-[800px] bg-gray-900 shadow-lg overflow-y-auto"
        >
          {/* Header Section */}
          <div className="sticky top-0  backdrop-blur-sm px-6 py-4 border-b border-slate-700 z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-50">Create New Task</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Main Form Content */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="  gap-6">
              {/* Left Column - Main Task Info */}
              <div className="col-span-7 px-6 space-y-6">
                {/* Title & Description Section */}

                <div className="space-y-2 w-full ">
                  <label className="text-sm font-medium text-slate-50">Title *</label>
                  <Input
                    value={formData.taskTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, taskTitle: e.target.value }))}
                    placeholder="Enter task title"
                    className="bg-gray-800 border-gray-500 text-gray-50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-50">Description (optional)</label>
                  <Textarea
                    value={formData.taskDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, taskDescription: e.target.value }))}
                    placeholder="Enter task description"
                    className="bg-gray-800 border-gray-500 text-slate-50 min-h-[120px]"
                  />
                </div>

                {/* Task Details Card */}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-50">Subject (optional)</label>
                    <Input
                      value={formData.taskSubject}
                      onChange={(e) => setFormData(prev => ({ ...prev, taskSubject: e.target.value }))}
                      placeholder="Enter subject"
                      className="bg-gray-800 border-gray-500 text-slate-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-50">Type (optional)</label>
                    <Select
                      value={formData.taskType}
                      onValueChange={(value: TaskType) => setFormData(prev => ({ ...prev, taskType: value }))}
                    >
                      <SelectTrigger className="bg-gray-800 border-slate-500 text-slate-50">
                        <SelectValue placeholder="Select task type" />
                      </SelectTrigger>
                      <SelectContent className='bg-gray-800'>
                        {Object.values(TaskType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-50">Due Date (optional)</label>
                      <Input
                        type="date"
                        value={formData.taskDueDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, taskDueDate: e.target.value }))}
                        className="bg-gray-800 border-slate-500 text-slate-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-50">Due Time (optional)</label>
                      <Input
                        type="time"
                        value={formData.taskDueTime}
                        onChange={(e) => setFormData(prev => ({ ...prev, taskDueTime: e.target.value }))}
                        className="bg-gray-800 border-slate-500 text-slate-50"
                      />
                    </div>
                  </div>
                </div>



                {/* Steps Section */}

                <div className='space-y-2'>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-slate-50">Steps</h3>
                  </div>

                  <div className="p-4 bg-slate-600/50 rounded-lg space-y-3">
                    <Input
                      value={formData.newStepTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, newStepTitle: e.target.value }))}
                      placeholder="Step title"
                      className="bg-slate-600 border-slate-500 text-slate-50"
                    />
                    <Textarea
                      value={formData.newStepDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, newStepDescription: e.target.value }))}
                      placeholder="Step description (optional)"
                      className="bg-slate-600 border-slate-500 text-slate-50"
                      rows={2}
                    />
                    <Button
                      type="button"
                      onClick={handleAddStep}
                      className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Step
                    </Button>
                  </div>

                  <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                    {formData.taskSteps.map((step) => (
                      <Card key={step.stepId} className="bg-slate-600/30 border-none shadow-sm">
                        <CardContent className="p-3">
                          <div className="flex justify-between">
                            <div className="flex items-start space-x-2">
                              <Checkbox
                                checked={step.stepCompleted}
                                disabled
                                className="mt-1"
                              />
                              <div>
                                <p className="font-medium text-slate-50">{step.stepTitle}</p>
                                {step.stepDescription && (
                                  <p className="text-sm text-slate-400">{step.stepDescription}</p>
                                )}
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removeStep(step.stepId)}
                              className="hover:bg-red-500/20 h-8 w-8"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                </div>





                {/* Tags Card */}
                <div className='space-y-2'>

                  <h3 className="text-lg font-semibold text-slate-50">Tags</h3>
                  <Input
                    value={formData.newTag}
                    onChange={(e) => setFormData(prev => ({ ...prev, newTag: e.target.value }))}
                    onKeyDown={handleAddTag}
                    placeholder="Add tags (press Enter)"
                    className="bg-gray-800 border-slate-500 text-slate-50"
                  />
                  <div className="flex flex-wrap gap-2 min-h-[40px]">
                    {formData.taskTags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-blue-500/20 flex items-center text-blue-300 hover:bg-blue-500/30"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-300"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links & Attachments Card */}
                <div className='space-y-2'>

                  {/* Links Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-50">Links</h3>
                    <div className="p-4 bg-slate-600/50 rounded-lg space-y-3">
                      <Input
                        value={formData.newLinkTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, newLinkTitle: e.target.value }))}
                        placeholder="Link title"
                        className="bg-slate-600 border-slate-500 text-slate-50"
                      />
                      <Input
                        value={formData.newLinkUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, newLinkUrl: e.target.value }))}
                        placeholder="Link URL (https://...)"
                        className="bg-slate-600 border-slate-500 text-slate-50"
                      />
                      <Button
                        type="button"
                        onClick={handleAddLink}
                        className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300"
                      >
                        <LinkIcon className="w-4 h-4 mr-2" />
                        Add Link
                      </Button>
                    </div>

                    <div className="max-h-[150px] overflow-y-auto space-y-2 pr-2">
                      {formData.taskLinks.map((link) => (
                        <Card key={link.id} className="bg-slate-600/30 border-none shadow-sm">
                          <CardContent className="p-3">
                            <div className="flex justify-between">
                              <div className="flex items-center space-x-2">
                                <LinkIcon className="w-4 h-4 text-blue-400" />
                                <div>
                                  <p className="font-medium text-slate-50">{link.title}</p>
                                  <p className="text-xs text-slate-400 truncate max-w-[200px]">{link.url}</p>
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeLink(link.id)}
                                className="hover:bg-red-500/20 h-8 w-8"
                              >
                                <Trash2 className="w-4 h-4 text-red-400" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Attachments Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-50">Attachments</h3>
                    <div className="p-4 bg-slate-600/50 rounded-lg space-y-3">
                      <Input
                        value={formData.newAttachmentName}
                        onChange={(e) => setFormData(prev => ({ ...prev, newAttachmentName: e.target.value }))}
                        placeholder="Attachment name"
                        className="bg-slate-600 border-slate-500 text-slate-50"
                      />
                      <Input
                        value={formData.newAttachmentUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, newAttachmentUrl: e.target.value }))}
                        placeholder="Attachment URL"
                        className="bg-slate-600 border-slate-500 text-slate-50"
                      />
                      <Button
                        type="button"
                        onClick={handleAddAttachment}
                        className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300"
                      >
                        <Paperclip className="w-4 h-4 mr-2" />
                        Add Attachment
                      </Button>
                    </div>

                    <div className="max-h-[150px] overflow-y-auto space-y-2 pr-2">
                      {formData.taskAttachments.map((attachment) => (
                        <Card key={attachment.id} className="bg-slate-600/30 border-none shadow-sm">
                          <CardContent className="p-3">
                            <div className="flex justify-between">
                              <div className="flex items-center space-x-2">
                                <Paperclip className="w-4 h-4 text-blue-400" />
                                <div>
                                  <p className="font-medium text-slate-50">{attachment.name}</p>
                                  <p className="text-xs text-slate-400 truncate max-w-[200px]">{attachment.url}</p>
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeAttachment(attachment.id)}
                                className="hover:bg-red-500/20 h-8 w-8"
                              >
                                <Trash2 className="w-4 h-4 text-red-400" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Submit Button - Fixed at Bottom */}
            <div className="sticky bottom-0 bg-slate-800/95 backdrop-blur-sm p-6 border-t border-slate-700 mt-6">
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 h-12 text-lg font-medium"
                disabled={isSubmitting || !isFormValid()}
              >
                {isSubmitting ? 'Creating...' : 'Create Task'}
              </Button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 