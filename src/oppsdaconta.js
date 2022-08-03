import { LightningElement, api } from "lwc";

export default class OppsDaConta extends LightningElement {
  @api id
  @api nome
  @api valor
  @api fase
}