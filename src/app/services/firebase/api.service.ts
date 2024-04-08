import { Injectable } from '@angular/core';

const BASE_URL: string = 'https://business-consulting-4286f-default-rtdb.europe-west1.firebasedatabase.app/';

@Injectable()

export class ApiService {
  public source: Record<string, string> = {
    service: `${BASE_URL}service`,
  }
}
