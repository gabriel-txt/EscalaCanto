import { Prisma } from '@prisma/client';
class artistaController {
    // Mostrar lista de artistas
    async index(req, res) {
        try {
            const artistasBuscados = await prisma.artista.findMany();
            return res.status(200).json(artistasBuscados);
        } catch (error) {
            return res.stataus(500).json({ errors: 'Erro ao buscar artistas' });
        }
    }

    // Mostrar detalhes de um artista
    async show(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'Id de artista não enviado'})
            }

            const artistaBuscado = await prisma.artista.findUnique({ where: { id } });

            // Verifica se o artista existe
            if (!artistaBuscado) {
                return res.status(404).json({ errors: ['O artista não foi encontrado ou não existe'] });
            }

            return res.status(200).json(artistaBuscado);
        } catch (error) {
            return res.stataus(500).json({ errors: 'Erro ao buscar artista' });
        }
    }

    // Criar um novo artista
    async create(req, res) {
        try {
            const { nome } = req.body;

            // Verifica se o nome foi enviado
            if (!nome) {
                return res.status(400).json({ errors: 'Nome do artista é obrigatório' });
            }

            const artistaExistente = await prisma.artista.findUnique({ where: { nome } });

            // Verifica se já existe um artista com o mesmo nome
            if (artistaExistente) {
                return res.status(409).json({ errors: 'Já existe um artista com esse nome' });
            }

            const novoArtista = await prisma.artista.create({ data: { nome }});
            return res.status(201).json(novoArtista);
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao criar artista' });
        }
    }

    // Atualizar um artista existente
    async update(req, res) {

    }

    // Deletar um artista
    async delete(req, res) {

    }
}

export default new artistaController();