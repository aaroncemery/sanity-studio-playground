/**
 * Determines the presentation URL based on the current environment.
 * Uses localhost:3000 for development (frontend).
 * In production, requires SANITY_STUDIO_PRESENTATION_URL to be set.
 * @throws {Error} If SANITY_STUDIO_PRESENTATION_URL is not set in production
 */
export const getPresentationUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    // In development, the frontend runs on port 3000
    // This is where the draft-mode API endpoint is located
    return 'http://localhost:3000'
  }

  const presentationUrl = process.env.SANITY_STUDIO_PRESENTATION_URL
  if (!presentationUrl) {
    throw new Error('SANITY_STUDIO_PRESENTATION_URL must be set in production environment')
  }

  return presentationUrl
}
