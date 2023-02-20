import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class accot extends LightningElement {
  @track successMessage = false;
  @track accountName;
  @track website;
  @track industry;

  handleChange(event) {
    this[event.target.name] = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();

    const fields = {
      Name: this.accountName,
      Website: this.website,
      Industry: this.industry
    };

    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

    createRecord(recordInput)
      .then(() => {
        this.successMessage = true;
      })
      .catch(error => {
        console.error(error);
      });
  }

  resetForm() {
    this.successMessage = false;
    this.accountName = '';
    this.website = '';
    this.industry = '';
  }
}
