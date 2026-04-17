"use client"

import type React from "react"
import { X } from "lucide-react"

export type FormData = {
  name: string
  email: string
  message: string
  website: string
}

type Props = {
  formData: FormData
  setFormData: (data: FormData) => void
  isSending: boolean
  sendError: string | null
  sendSuccess: boolean
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
}

export default function ContactForm({
  formData,
  setFormData,
  isSending,
  sendError,
  sendSuccess,
  onSubmit,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Fermer"
          disabled={isSending}
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
          Discutons de votre projet
        </h3>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
              required
              disabled={isSending}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
              required
              disabled={isSending}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all resize-none"
              required
              disabled={isSending}
            />
          </div>

          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          {sendError && (
            <div className="text-sm text-red-200 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              {sendError}
            </div>
          )}

          {sendSuccess && (
            <div className="text-sm text-emerald-200 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Message envoyé. Je te réponds rapidement.
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-60 disabled:hover:from-cyan-500 disabled:hover:to-purple-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            {isSending ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  )
}
