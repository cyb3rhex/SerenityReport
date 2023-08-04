namespace MyProject.Invoice {

    @Serenity.Decorators.registerClass()
    export class InvoiceReportDialog extends Serenity.PropertyDialog<any, any> {

        private form: InvoiceReportForm;

        constructor() {
            super();
            this.form = new InvoiceReportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Invoice Report";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Generate',
                    click: () => {
                        let criteria = this.form;
                        let invoiceNumber = criteria.InvoiceNumber.value;
                        let vendor = criteria.Vendor.value;
                        let startDate = criteria.StartDate.valueAsDate;
                        let endDate = criteria.EndDate.valueAsDate;
                        
                        // You can use these values to filter your data and generate the report
                    }
                },
                {
                    text: 'Cancel',
                    click: () => {
                        this.dialogClose();
                    }
                }
            ];
        }
    }
}
