console.log("Observer Design Pattern");

interface ISubject{
    attach(obsever:IObserver): void;
    detach(obsever:IObserver): void;
    notify(): void;
}

class YoutubeNotificationSystem implements ISubject{
    private obsersvers: IObserver[] = [];

    attach(obsever: IObserver): void {
        const isExist = this.obsersvers.includes(obsever);
        if (isExist) {
            console.log("Observer has already been attached");
            return;
        }
        this.obsersvers.push(obsever);
        console.log("Observer attached");
    }
    detach(obsever: IObserver): void {
        const observerIndex = this.obsersvers.indexOf(obsever);
        if(observerIndex === -1) {
            console.log("Observer has not been attached");
            return;
        }
        this.obsersvers.splice(observerIndex, 1);
        console.log("Observer detached");
    }
    notify(): void {
        for(const observer of this.obsersvers) {
            observer.update(this);
        }
    }

}


interface IObserver{
    uniqueId: string;
    update(Subject: ISubject): void
}

class SmartphoneObserver implements IObserver{
    uniqueId: string;
    constructor(uniqueId: string) {
        this.uniqueId = uniqueId;
    }
    update(Subject: ISubject): void {
        console.log(`${this.uniqueId} observer notified`);
    }
}

class TabletObserver implements IObserver{
    uniqueId: string;
    constructor(uniqueId: string) {
        this.uniqueId = uniqueId;
    }
    update(Subject: ISubject): void {
        console.log(`${this.uniqueId} observer notified`);
    }
}


// client code
const YTNotificationSystem = new YoutubeNotificationSystem();
const HarshitsSamsungObserver = new SmartphoneObserver("HarshitsSamsung");
const ChandansTabletObserver = new TabletObserver("ChandansTablet");
YTNotificationSystem.attach(HarshitsSamsungObserver);
YTNotificationSystem.attach(ChandansTabletObserver);
YTNotificationSystem.notify();
YTNotificationSystem.detach(HarshitsSamsungObserver);
YTNotificationSystem.notify();



// Publisher - sends notifications
// Subscriber - receives notifications (Observer)

// interface for Publisher - sendNotification, attach, detach
    // Example: Mr.Beast - 10sub -(detach)-> 5sub -(notify)-> notification
    // YoutubePublisherChannel
    // YoutubePublisherPaid
    // WeatherStation
    // Newspaper
    // NewLetter - Leny's new letter
// interface for Subscriber - update
    // Phones, Tablets

/**
 * Weather Station - Observers
 */

/**
 * What are the
 */