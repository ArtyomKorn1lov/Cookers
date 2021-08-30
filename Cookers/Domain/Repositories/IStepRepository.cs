using Domain.Entity;

namespace Domain.Repositories
{
    public interface IStepRepository
    {
        Step Get( int id );
        void Create( Step item );
    }
}
