'use client'

import React from 'react'
import { Card, CardContent } from './ui/card'

interface VideoPlayerProps {
    videoUrl?: string
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
    return (
        <Card className="w-full bg-gray-900/50 border-gray-800">
            <CardContent className="p-4">
                <div className="aspect-video w-full bg-gray-800/50 rounded-lg flex items-center justify-center">
                    {videoUrl ? (
                        <iframe
                            src={videoUrl}
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <div className="text-gray-400">
                            No video available for this lesson
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
} 