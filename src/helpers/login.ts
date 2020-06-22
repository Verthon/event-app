import {
  doSignInWithGoogle,
  doSignInWithFacebook,
  redirectResultGoogle,
  doSignWithGoogleCredentials,
  redirectResultFacebook,
  doSignWithFacebookCredentials,
} from '../firebase/firebase'

import { ACCOUNT } from '../constants/routes'

export const loginWithSocial = (provider: string, history) => {
  if (provider === 'Google') {
    doSignInWithGoogle()
      .then(() => redirectResultGoogle())
      .then((result: any) => {
        const token = result.credential.accessToken
        doSignWithGoogleCredentials(token)
        history.push(ACCOUNT)
      })
      .catch((error) => {
        console.log(
          `Error occurred while signing in using ${provider} provider.`,
          error
        )
        alert(`Error while trying to login with Google ==> ${error.message}`)
      })
  }
  if (provider === 'Facebook') {
    doSignInWithFacebook()
      .then(() => redirectResultFacebook())
      .then((result: any) => {
        const token = result.credential.accessToken
        doSignWithFacebookCredentials(token)
        history.push(ACCOUNT)
      })
      .catch((error) =>
        console.log(
          `Error occurred while signing in using ${provider} provider.`,
          error
        )
      )
  }
}