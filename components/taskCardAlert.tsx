'use client'

import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Step, Task } from "@/types/task"
import { useState } from "react"
import { Clock, CheckCircle2, ExternalLink, LinkIcon, Trash2, CircleFadingArrowUp, FileIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {

  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog"

interface TaskCardAlertProps {
  step: Step
  onStepUpdate: (stepId: number, completed: boolean) => void
  variant?: 'default' | 'primary' | 'success' | 'warning'
  showAnimation?: boolean
  priority?: 'low' | 'medium' | 'high'
  showTimeEstimate?: boolean
  timeEstimate?: number // in minutes
}





export default function TaskCardAlert({ 
  step, 
  onStepUpdate, 
  variant = 'default',
  showAnimation = true,
  priority = 'medium',
  showTimeEstimate = false,
  timeEstimate = 0
}: TaskCardAlertProps) {
  // Local state to manage hover effect
  const [isHovered, setIsHovered] = useState(false)
  
  // Determine styles based on variant prop
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-950/90 to-blue-900/80 hover:from-blue-900/95 hover:to-blue-800/85 border-l-4 border-blue-500';
      case 'success':
        return 'bg-gradient-to-r from-green-950/90 to-green-900/80 hover:from-green-900/95 hover:to-green-800/85 border-l-4 border-green-500';
      case 'warning':
        return 'bg-gradient-to-r from-amber-950/90 to-amber-900/80 hover:from-amber-900/95 hover:to-amber-800/85 border-l-4 border-amber-500';
      default:
        return 'bg-gradient-to-r from-slate-800/95 to-slate-700/90 hover:from-slate-700/95 hover:to-slate-600/90 border-l-4 border-slate-600';
    }
  }

  // Get priority badge styles
  const getPriorityBadge = () => {
    switch(priority) {
      case 'high':
        return <span className="px-2 py-0.5 text-xs font-medium bg-red-900/80 text-red-200 rounded-full">High</span>;
      case 'medium':
        return <span className="px-2 py-0.5 text-xs font-medium bg-amber-900/80 text-amber-200 rounded-full">Medium</span>;
      case 'low':
        return <span className="px-2 py-0.5 text-xs font-medium bg-green-900/80 text-green-200 rounded-full">Low</span>;
      default:
        return null;
    }
  };

  // Format time estimate
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  // Animation variants
  const cardVariants = {
    initial: showAnimation ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: showAnimation ? { opacity: 0, y: -20 } : { opacity: 0 },
    hover: { scale: 1.01, transition: { duration: 0.2 } }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center space-x-4 p-5 rounded-lg transition-all duration-200 shadow-lg backdrop-blur-sm ${getVariantStyles()}`}
    >
      <div className="flex-shrink-0">
        <Checkbox
          checked={step.stepCompleted}
          onCheckedChange={(checked) => onStepUpdate(step.stepId, checked as boolean)}
          className={`h-5 w-5 rounded-md border-2 transition-colors duration-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 ${step.stepCompleted ? 'opacity-60' : 'opacity-100'}`}
        />
      </div>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <h3 className={`text-sm font-medium leading-none ${step.stepCompleted ? 'text-slate-400 line-through' : 'text-slate-50'}`}>
              {step.stepTitle}
            </h3>
            <div className="flex gap-2 items-center">
              {getPriorityBadge()}
              {showTimeEstimate && timeEstimate > 0 && (
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="h-3 w-3" /> {formatTime(timeEstimate)}
                </span>
              )}
            </div>
          </div>
          
          {/* Status indicator icon */}
          <motion.div 
            animate={{ scale: isHovered ? 1.1 : 1 }}
            className="flex-shrink-0 bg-slate-800/50 rounded-full p-1.5 backdrop-blur-sm"
          >
            {step.stepCompleted ? (
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            ) : (
              <Clock className="h-5 w-5 text-blue-400" />
            )}
          </motion.div>
        </div>
        
        <p className={`text-sm ${step.stepCompleted ? 'text-slate-500' : 'text-slate-300'}`}>
          {step.stepDescription}
        </p>

        {step.stepCompleted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-green-400 flex items-center gap-1.5"
          >
            <CheckCircle2 className="h-3 w-3" /> Completed
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}



export function TaskDetailAlert({ 
  task, 
  progress, 
  onStepUpdate, 
  onDeleteTask 
}: {
  task: Task
  progress: number
  onStepUpdate: (stepId: number, completed: boolean) => void
  onDeleteTask: () => void
}) {



  return (
    <AlertDialogContent className="bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700 text-slate-50 max-w-4xl lg:min-h-[80%] rounded-xl shadow-xl">
      {/* Task Header Section */}

      <AlertDialogHeader className="mb-6 w-full">
        <div className="flex flex-col space-y-4 w-full">

          {/* Title and Delete/Update Button */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <AlertDialogTitle className="text-2xl font-bold text-white">
                {task.taskTitle}
              </AlertDialogTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              // onClick={openUpdate}
              className="hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 rounded-full p-2 ml-2"
            >
              <CircleFadingArrowUp className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onDeleteTask}
              className="hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-full p-2 ml-2"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Status Badges Section */}
          <div className="flex flex-wrap items-center gap-3 py-2">
            <div className="flex items-center">
              <span className={`px-3 py-1 text-sm flex items-center rounded-md ${
                task.taskStatus === 'IN_PROGRESS' 
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" 
                  : "bg-green-500/20 text-green-400 border border-green-500/30"
              }`}>
                {task.taskStatus === 'IN_PROGRESS' 
                  ? <><Clock className="w-3.5 h-3.5 mr-1.5" /> In Progress</> 
                  : <><CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Completed</>
                }
              </span>
            </div>
            
            <div className="flex items-center text-sm text-slate-300 bg-slate-800/60 px-3 py-1 rounded-md">
              <Clock className="w-4 mr-1.5 text-blue-400" />
              Due: {task.taskDueTime}
            </div>
            
            <div className="flex items-center text-sm text-slate-300 bg-slate-800/60 px-3 py-1 rounded-md">
              <Clock className="w-4 mr-1.5 text-blue-400" />
              Created: {task.taskCreatedDate}
            </div>
          </div>
          
          {/* Category and Tags Section */}
          <div className="border-t border-b border-slate-700 py-3 flex flex-wrap items-center gap-2">
            <div className="mr-2 text-slate-400 text-sm">Category:</div>
            <span className="text-slate-50 bg-indigo-600 hover:bg-indigo-500 transition-colors px-3 py-1 rounded-md text-sm">
              {task.taskSubject}
            </span>
            
            {task.taskTags.length > 0 && (
              <>
                <div className="mx-2 text-slate-500">|</div>
                <div className="mr-2 text-slate-400 text-sm">Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {task.taskTags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs text-slate-50 bg-indigo-600/50 hover:bg-indigo-600/70 transition-colors rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Progress Bar Section */}
          <div className="flex items-center">
            <div className="w-full">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-slate-300">Overall Progress</span>
                <span className="text-sm font-medium text-blue-400">{progress}%</span>
              </div>
              <div 
                className="h-2 bg-slate-700/60 rounded-full overflow-hidden"
              >
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </AlertDialogHeader>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


        {/* Left Column - Description and Steps */}
        <div className="space-y-6">
        
          {/* Description Section */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-50 mb-2">Description</h3>
            <p className="text-slate-300">
              {task.taskDescription}
            </p>
          </div>
          
          {/* Steps Section */}
          <div className="bg-slate-800/50 p-4 rounded-lg max-h-48 flex flex-col scroll-smooth md:scroll-auto border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-50">Steps</h3>
              <div className="flex items-center">
                <span className="text-sm text-slate-400 mr-2">Progress:</span>
                <span className="text-sm font-medium text-blue-400">{progress}%</span>
              </div>
            </div>
            
            {/* Steps list with scrollable container */}
            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 ">
              {task.taskSteps.map((step) => (
                <TaskCardAlert 
                  key={step.stepId}
                  step={step}
                  onStepUpdate={onStepUpdate}
                />
              ))}
            </div>
          </div>
        </div>
        

        {/* Right Column - Attachments and Links */}
        <div className="space-y-6">

          {/* Attachments Section */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Attachments</h3>
            {task.taskAttachments.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {task.taskAttachments.map((attachment) => (
                  <Button
                    key={attachment.id}
                    variant="outline"
                    className="flex items-center space-x-2 bg-slate-800 border-slate-600 hover:bg-blue-500 hover:text-slate-50 transition-colors"
                  >
                    <FileIcon className="w-4 h-4" />
                    <span className="text-sm">{attachment.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-sm">No attachments for this task</p>
            )}
          </div>
          
          {/* Links Section */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">Links</h3>
            {task.taskLinks.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {task.taskLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-md bg-slate-800 hover:bg-blue-500 hover:text-slate-50 transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    <span className="text-sm">{link.title}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-sm">No links for this task</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer Actions */}
      <AlertDialogFooter className="mt-6 pt-4 border-t border-slate-700">
        <AlertDialogCancel className="hover:bg-slate-700 border-none bg-slate-800 hover:text-slate-50 transition-colors">
          Back
        </AlertDialogCancel>
        <AlertDialogAction className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
          <Link href={'/startTask'}>Start Task</Link>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}
