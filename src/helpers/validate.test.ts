import { validateMessageForm, validate } from './validate'

describe('validateMessageForm', () => {
  it('Should print error when form has empty name field.', async () => {
    const testFormData = {
      name: '',
      email: 'valid@email.com',
      message: 'Correct message',
      createdAt: '2020-04-1993'
    }
    expect(validateMessageForm(testFormData)).toStrictEqual({ inputName: 'name', error: 'Name should have at least 2 characters' })
  })
  it('Should return null if formData is valid', async () => {
    const testFormData = {
      name: 'ValidName',
      email: 'valid@email.com',
      message: 'Correct message',
      createdAt: '2020-04-1993'
    }
    expect(validateMessageForm(testFormData)).toBe(undefined)
  })
})

describe('validate function', () => {
  it('Should return error object, when submitted form data has empty image url field.', async () => {
    const testFormData = {
      title: 'Event title',
      host: 'Event host',
      localization: 'Event localization',
      address: '',
      description: 'Event description',
      category: 'Sport',
      imageUrl: 'eventValidImageUrl',
      day: '2020-06-29',
      hour: '13:00'
    }
    expect(validate(testFormData)).toStrictEqual({
      "error": "Event address should have at least 6 characters",
      "inputName": "address",
    })
  })
  it('Should return null if everything is ok.', async () => {
    const testFormData = {
      title: 'Event title',
      host: 'Event host',
      localization: 'Event localization',
      address: 'Event address',
      description: 'Event description',
      category: 'Sport',
      imageUrl: 'validImageURL',
      day: '2020-06-29',
      hour: '13:00'
    }
    expect(validate(testFormData)).toBe(null)
  })
})