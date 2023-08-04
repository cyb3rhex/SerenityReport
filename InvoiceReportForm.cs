using Serenity.ComponentModel;

namespace MyProject.Invoice.Forms
{
    public class InvoiceReportForm
    {
        public String InvoiceNumber { get; set; }
        public String Vendor { get; set; }

        [DateEditor]
        public DateTime StartDate { get; set; }

        [DateEditor]
        public DateTime EndDate { get; set; }
    }
}
