using System.Collections.Generic;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetByRecipeId( int id );
        Tag Get( int id );
        void Update( Tag item );
    }
}
