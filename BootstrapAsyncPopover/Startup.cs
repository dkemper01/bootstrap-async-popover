using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootstrapAsyncPopover.Startup))]
namespace BootstrapAsyncPopover
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
