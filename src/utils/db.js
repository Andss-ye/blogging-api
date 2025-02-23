import fs from "fs-extra";

const DB_FILE = "src/db.json";

// Cargar datos desde el archivo JSON
export const loadDB = async () => {
    try {
        const data = await fs.readJson(DB_FILE);
        return data;
    } catch (error) {
        console.error("Error cargando la base de datos:", error);
        return { posts: [] };
    }
};

// Guardar datos en el archivo JSON
export const saveDB = async (data) => {
    try {
        await fs.writeJson(DB_FILE, data, { spaces: 2 });
    } catch (error) {
        console.error("Error guardando la base de datos:", error);
    }
};
