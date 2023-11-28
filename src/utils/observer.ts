export type Observer = Function

export interface Subject {
  attach(subscriber: Observer): void
  detach(unsunscriber: Observer): void
  notify(): void
}

export class NotificationsObserver implements Subject {
  private observers: Observer[] = []

  attach(observer: Observer): void {
    this.observers.push(observer)
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.')
    }

    this.observers.splice(observerIndex, 1)
  }

  notify(): void {
    this.observers.forEach((observer) => observer())
  }
}

export const observer = new NotificationsObserver()
