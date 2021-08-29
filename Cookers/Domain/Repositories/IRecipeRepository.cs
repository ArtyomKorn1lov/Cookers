using System.Collections.Generic;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IRecipeRepository
    {
        List<Recipe> GetLastCount( int count );
        List<Recipe> GetByName( string name );
        List<Recipe> GetRecipeByTag( string tag );
        Recipe Get( int id );
        Recipe GetRecipeOfDay();
        void Create( Recipe item );
        void Update( Recipe item, int id );
        void Delete( int id );
    }
}
