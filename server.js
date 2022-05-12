const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/courses', async (req, res) => {
  const allCourses =  await prisma.course.findMany({});
  res.json(allCourses);
});

app.get('/courses/:id', async (req, res) => {
  const id = req.params.id;
  const course = await prisma.course.findUnique({where: {id: parseInt(id)}});
  res.json(course);
});

app.post('/courses', async (req, res) => {
  const course = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrrollments: req.body.enrrollments,
   };

  const message = 'Course creado.';
  await prisma.course.create({data: course});
  return res.json({message});
});

app.put('/courses/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.course.update({
		where: {
			id: id
		},
		data: {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrrollments: req.body.enrrollments,
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/courses/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.course.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});