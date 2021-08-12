using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IRecipeRepository 
    {
        IEnumerable<Recipe> GetAll();
        Recipe Get( int id );
        void Create( Recipe item );
        void Update( Recipe item );
        void Delete( int id );
    }
}
