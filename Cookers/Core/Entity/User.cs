namespace Domain.Entity
{
    public class User
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
