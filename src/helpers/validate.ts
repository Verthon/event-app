interface IForm {
  title: string
  host: string
  localization: string
  address: string
  description: string
  categories?: Array<string>
  category: string
  imageUrl: string
  day: string
  hour: string
}

interface IContactForm {
  name: string,
  email: string,
  message: string,
  createdAt: string
}

export const validateMessageForm = (form: IContactForm) => {
  if (form.name.length < 2) {
    return {
      inputName: 'name',
      error: 'Name should have at least 2 characters',
    }
  } else if (form.email.length < 5) {
    return {
      inputName: 'email',
      error: 'Email should have at least 7 characters',
    }
  } else if (form.message.length < 7) {
    return {
      inputName: 'message',
      error: 'Email should have at least 7 characters'
    }
  }
}

export const validate = (form: IForm) => {
  if (form.title.length < 5) {
    return {
      inputName: 'title',
      error: 'Event title should have at least 6 characters',
    }
  } else if (form.host.length < 5) {
    return {
      inputName: 'host',
      error: 'Event host should have at least 6 characters',
    }
  } else if (form.localization.length < 3) {
    return {
      inputName: 'localization',
      error: 'Event localization should have at least 4 characters',
    }
  } else if (form.address.length < 5) {
    return {
      inputName: 'address',
      error: 'Event address should have at least 6 characters',
    }
  } else if (form.description.length < 10) {
    return {
      inputName: 'description',
      error: 'Event description should have at least 10 characters',
    }
  }

  return null
}