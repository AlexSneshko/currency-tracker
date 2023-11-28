import {
  NotificationsObserver,
  Subject,
  Observer,
  observer,
} from '../../src/utils/observer' // Update the path accordingly

describe('NotificationsObserver', () => {
  let subject: Subject

  beforeEach(() => {
    subject = new NotificationsObserver()
  })

  test('attaches an observer', () => {
    const mockObserver: Observer = jest.fn()
    subject.attach(mockObserver)

    expect((subject as any).observers).toContain(mockObserver)
  })

  test('detaches an observer', () => {
    const mockObserver: Observer = jest.fn()
    subject.attach(mockObserver)
    subject.detach(mockObserver)

    expect((subject as any).observers).not.toContain(mockObserver)
  })

  test('notifies observers', () => {
    const mockObserver1: Observer = jest.fn()
    const mockObserver2: Observer = jest.fn()

    subject.attach(mockObserver1)
    subject.attach(mockObserver2)

    subject.notify()

    expect(mockObserver1).toHaveBeenCalledTimes(1)
    expect(mockObserver2).toHaveBeenCalledTimes(1)
  })

  test('does not detach nonexistent observer', () => {
    const mockObserver: Observer = jest.fn()
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

    subject.detach(mockObserver)

    expect(consoleSpy).toHaveBeenCalledWith('Subject: Nonexistent observer.')

    consoleSpy.mockRestore()
  })

  test('uses the observer from the exported instance', () => {
    const mockObserver: Observer = jest.fn()
    observer.attach(mockObserver)

    observer.notify()

    expect(mockObserver).toHaveBeenCalledTimes(1)
  })
})
