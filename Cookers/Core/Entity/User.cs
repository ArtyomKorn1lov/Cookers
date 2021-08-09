using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entity
{
    public class User : Entity
    {
        public string Name { get; private set; }
        public string Login { get; private set; }
        public string Password { get; private set; }
    }
}
