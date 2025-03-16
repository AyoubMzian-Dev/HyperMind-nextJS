'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

export default function AIChat() {
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle message submission here
        console.log('Message submitted:', message)
        setMessage('')
    }

    return (
        <Card className="w-full bg-gray-900/50 border-gray-800">
            <CardHeader className="border-b border-gray-800 px-4 py-3">
                <CardTitle className="text-lg font-medium text-white">AI Chat Assistant</CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-[400px] overflow-y-auto">
                <div className="space-y-4">
                    {/* Example message */}
                    <div className="bg-gray-800/50 rounded-lg p-3 text-sm text-gray-300">
                        Ask me anything about this lesson!
                    </div>
                </div>
            </CardContent>
            <CardFooter className="border-t border-gray-800 p-4">
                <form onSubmit={handleSubmit} className="w-full flex gap-2">
                    <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your question..."
                        className="flex-1 bg-gray-800/50 border-gray-700 focus:border-green-500 text-white"
                    />
                    <Button type="submit" size="icon" className="bg-green-600 hover:bg-green-700">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
} 