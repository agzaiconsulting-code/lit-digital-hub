import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

const mockOpen = jest.fn()
Object.defineProperty(window, 'open', { value: mockOpen, writable: true })

beforeEach(() => {
  mockOpen.mockClear()
})

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm selectedPack="" />)
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+34 600 000 000')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('pre-selects the pack passed via prop', () => {
    render(<ContactForm selectedPack="Pack Crecimiento — 450€/mes" />)
    const select = screen.getByRole('combobox') as HTMLSelectElement
    expect(select.value).toBe('Pack Crecimiento — 450€/mes')
  })

  it('opens WhatsApp URL with correct data on submit', () => {
    render(<ContactForm selectedPack="" />)
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { target: { value: 'Ana Lopez' } })
    fireEvent.change(screen.getByPlaceholderText('tu@email.com'), { target: { value: 'ana@test.com' } })
    fireEvent.change(screen.getByPlaceholderText('+34 600 000 000'), { target: { value: '666111222' } })
    fireEvent.click(screen.getByText(/Enviar por WhatsApp/i))
    expect(mockOpen).toHaveBeenCalledTimes(1)
    const calledUrl = mockOpen.mock.calls[0][0] as string
    expect(calledUrl).toMatch(/^https:\/\/wa\.me\//)
    const decoded = decodeURIComponent(calledUrl.split('?text=')[1])
    expect(decoded).toContain('Ana Lopez')
    expect(decoded).toContain('ana@test.com')
  })
})
