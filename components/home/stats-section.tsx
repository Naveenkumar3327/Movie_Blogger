export default function StatsSection() {
  const stats = [
    { label: 'Total Movies', value: '5,000+' },
    { label: 'User Reviews', value: '15,000+' },
    { label: 'Active Users', value: '2,500+' },
    { label: 'Blog Articles', value: '800+' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-950/50 to-purple-950/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}