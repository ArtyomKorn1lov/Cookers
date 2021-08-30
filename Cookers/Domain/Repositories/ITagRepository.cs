using Domain.Entity;

namespace Domain.Repositories
{
    public interface ITagRepository
    {
        Tag Get( int id );
        void Create( Tag item );
    }
}
