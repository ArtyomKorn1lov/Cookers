using Domain.Entity;

namespace Domain.Repositories
{
    public interface IUserRepository
    {
        User Get( int id );
        void Create( User item );
        void Delete( int id );
    }
}
