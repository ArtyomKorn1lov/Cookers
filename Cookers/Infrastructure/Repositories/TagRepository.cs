using System.Collections.Generic;
using Domain.Entity;
using Domain.Repositories;
using Infrastructure.DbContexts;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class TagRepository : ITagRepository
    {
        private RecipeDbContext _recipeDbContext;

        public List<Tag> GetByRecipeId( int id )
        {
            return _recipeDbContext.Set<Tag>().Where( t => t.RecipeId == id ).ToList();
        }
    }
}
