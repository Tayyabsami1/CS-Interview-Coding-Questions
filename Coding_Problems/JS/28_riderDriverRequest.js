//  So we have riders and drivers request , we have to fullfill them in order
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.items[this.head];
    this.head++;
    if (this.head > 1000 && this.items.length > 2000) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }

    return value;
  }

  isEmpty() {
    return this.head >= this.items.length;
  }
}

class RideRequestManager {
  constructor() {
    this.riderRequests = new Map();
    this.driverRequests = new Map();
  }

  createRiderRequest(riderId, pickupArea) {
    this.addRequest(this.riderRequests, riderId, pickupArea);
  }

  createDriverRequest(driverId, pickupArea) {
    this.addRequest(this.driverRequests, driverId, pickupArea);
  }

  getRiderRequest(pickupArea) {
    return this.getRequest(this.riderRequests, pickupArea);
  }

  getDriverRequest(pickupArea) {
    return this.getRequest(this.driverRequests, pickupArea);
  }

  addRequest(requestMap, userId, pickupArea) {
    if (!requestMap.has(pickupArea)) {
      requestMap.set(pickupArea, new Queue());
    }

    const request = {
      userId,
      pickupArea,
    };

    requestMap.get(pickupArea).enqueue(request);
  }

  getRequest(requestMap, pickupArea) {
    if (!requestMap.has(pickupArea)) {
      return null;
    }

    const queue = requestMap.get(pickupArea);

    const request = queue.dequeue();

    if (queue.isEmpty()) {
      requestMap.delete(pickupArea);
    }

    return request;
  }
}
