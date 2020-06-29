export const fetchUnsplashImages = async (url: string) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      return response.json()
    }
  }
  catch (error) {
    return error
  }
}