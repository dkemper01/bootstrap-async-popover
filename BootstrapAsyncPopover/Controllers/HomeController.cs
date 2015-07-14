using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BootstrapAsyncPopover.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult FetchDemoTooltipContent(string entry, int gmtOffsetHours, int gmtOffsetMinutes)
        {
            string htmlToReturn = "<p>You didn't enter anything in this field yet.</p>";
            System.DateTime callerDateTime = System.DateTime.UtcNow.AddHours(gmtOffsetHours).AddMinutes(gmtOffsetMinutes);

            // Simulate long running task here ...
            //
            System.Threading.Thread.Sleep(500);

            if (!String.IsNullOrEmpty(entry))
            {
                htmlToReturn = String.Format("<p>On {0} at {1}, you entered: </p> <p></p> <p>{2}</p>", callerDateTime.ToShortDateString(), callerDateTime.ToShortTimeString(), HttpUtility.HtmlAttributeEncode(entry));
            }

            return new JsonResult { Data = htmlToReturn, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}