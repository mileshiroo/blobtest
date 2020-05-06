// This test is buggy :( todo debug the particle issues
function TestElasticParticles() {
  camera.position.y = 3;
  camera.position.z = 4;

  var bd = new b2BodyDef();
  var ground = world.CreateBody(bd);

  var shape1 = new b2PolygonShape();
  var vertices = shape1.vertices;
  vertices.push(new b2Vec2(-4, -1));
  vertices.push(new b2Vec2(4, -1));
  vertices.push(new b2Vec2(4, 0));
  vertices.push(new b2Vec2(-4, 0));
  ground.CreateFixtureFromShape(shape1, 0);

  var shape2 = new b2PolygonShape();
  var vertices = shape2.vertices;
  vertices.push(new b2Vec2(-6, -0.1));
  vertices.push(new b2Vec2(-4, -0.1));
  vertices.push(new b2Vec2(-4, 7));
  vertices.push(new b2Vec2(-6, 7));
  ground.CreateFixtureFromShape(shape2, 0);

  var shape3 = new b2PolygonShape();
  var vertices = shape3.vertices;
  vertices.push(new b2Vec2(4, -0.1));
  vertices.push(new b2Vec2(6, -0.1));
  vertices.push(new b2Vec2(6, 7));
  vertices.push(new b2Vec2(4, 7));
  ground.CreateFixtureFromShape(shape3, 0);

  var psd = new b2ParticleSystemDef();
  psd.radius = 0.10;
  var particleSystem = world.CreateParticleSystem(psd);


  for(i = 0; i < 11; i++) {
      var circle = new b2CircleShape();
      circle.position.Set(1, i*2+5);
      circle.radius = 1;
      var pgd = new b2ParticleGroupDef();
      pgd.flags = b2_springParticle;
      pgd.groupFlags = b2_solidParticleGroup;
      pgd.shape = circle;
      pgd.color.Set(Math.random()*255, Math.random()*255, Math.random()*255, 255);
      particleSystem.CreateParticleGroup(pgd);
  }

  // circle
  bd = new b2BodyDef();
  var circle = new b2CircleShape();
  bd.type = b2_dynamicBody;
  var body = world.CreateBody(bd);
  circle.position.Set(0, 8);
  circle.radius = 0.5;
  body.CreateFixtureFromShape(circle, 0.5);
}