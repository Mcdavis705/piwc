import background from '/bannerImage.jpg';

function HeroBanner() {
  const imageUrl = background;

  return (
    <div
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Gradient/Purple Overlay (to match the design's tint) */}
      <div className="absolute inset-0 bg-indigo-900 opacity-30"></div>

      {/* Content */}
      <div className="relative text-center p-8 bg-black/30 rounded-xl">
        <h1 className="text-5xl font-extrabold text-white mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_70%)]">
          EVANGELISM · DISCIPLESHIP · PRAYER
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
          PIWC Barcelona is a Spirit-led community devoted to sharing God’s love, nurturing faith, and empowering believers to make a lasting impact in their world.
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;