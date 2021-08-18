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
        List<Recipe> GetLastCount( int count );
        Recipe Get( int id );
        void Create( Recipe item );
        void Delete( int id );
    }
}
