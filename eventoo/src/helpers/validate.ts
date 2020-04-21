export const validate = (form: any) => {
  if (form.title.length < 5) {
    return {
      inputName: 'title',
      error: 'Event title should have at least 6 characters',
    }
  } else if (form.host < 5) {
    return {
      inputName: 'host',
      error: 'Event host should have at least 6 characters',
    }
  } else if (form.localization < 3) {
    return {
      inputName: 'localization',
      error: 'Event localization should have at least 4 characters',
    }
  } else if (form.address < 5) {
    return {
      inputName: 'address',
      error: 'Event address should have at least 6 characters',
    }
  } else if (form.description < 10) {
    return {
      inputName: 'description',
      error: 'Event description should have at least 10 characters',
    }
  }
  return null
}