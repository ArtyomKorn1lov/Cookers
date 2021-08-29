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

        public TagRepository( RecipeDbContext context )
        {
            _recipeDbContext = context;
        }

        public List<Tag> GetByRecipeId( int id )
        {
            return _recipeDbContext.Set<Tag>().Where( t => t.RecipeId == id ).ToList();
        }

        public Tag Get( int id )
        {
            return _recipeDbContext.Set<Tag>().FirstOrDefault( t => t.Id == id );
        }

        public void Update( Tag tag )
        {
            Tag _tag = Get( tag.Id );
            _tag.CopyFrom( tag );
        }
    }
}
