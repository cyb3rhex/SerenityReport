namespace MyProject.Invoice {

    export class InvoiceReportForm extends Serenity.PrefixedContext {
        static formKey = 'Invoice.InvoiceReport';

        constructor(prefix: string) {
            super(prefix);
        }

        public InvoiceNumber = Serenity.StringEditor;
        public Vendor = Serenity.StringEditor;
        public StartDate = Serenity.DateEditor;
        public EndDate = Serenity.DateEditor;
    }
}
