'use strick'
class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = alarmCollection[];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if(typeof id === 'underfined') {
        throw new Error('error text');  
    }
    if(this.alarmCollection.find((x) => (x.id === id))) {
        return console.error('The Alert already exist.');
    }  else {
         this.alarmCollection.push({id, time, callback});
    }

  }
  
  removeClock(id) {
    let index = this.alarmCollection.findIndex((element) => element.id === id);
    if(index === -1) {
      return false;
    }
    else {
      this.alarmCollection.splice(index, 1);
    }

  }

  getCurrentFormattedTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(hours < 10) {
        return 0 + hours;
    }
    if(minutes < 10) {
        return 0 + minutes;
    }
    return hours + ':' + minutes;;
  }

  start() {
    let checkClock = (clock) => {
        let alarm = this.getCurrentFormattedTime();
        if(clock.time === alarm) {
            return clock.callback();
        }
    }
    if(this.timerId === null) {
        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(clock => checkClock(clock));
        }, 1000);
    }
    return;
  }
  stop () {
    if (this.timerId !== null) {
        clearInterval(this.timerId);
        return this.timerId = null;
    }
}
printAlarms () {
    return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
}
clearAlarms () {
    this.stop();
    this.alarmCollection.splice(0, this.alarmCollection.length);
    
}
}

let myClock = new AlarmClock();
myClock.addClock('21:23', () => console.log('Tomorrow',) 2000);
myClock.addClock('21:24', () => console.log('Tomorrow') 3000);
