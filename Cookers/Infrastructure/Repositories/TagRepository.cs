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

        public Tag Get( int id )
        {
            return _recipeDbContext.Set<Tag>().FirstOrDefault( t => t.Id == id );
        }

        public void Create( Tag tag )
        {
            _recipeDbContext.Set<Tag>().Add( tag );
        }
    }
}
