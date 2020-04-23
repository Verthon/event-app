export const fetchUnsplashImages = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}