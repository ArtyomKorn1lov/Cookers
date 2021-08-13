using System.Collections.Generic;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User Get( int id );
        void Create( User item );
        void Delete( int id );
    }
}
