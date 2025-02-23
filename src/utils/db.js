import fs from "fs-extra";
import path from "path";

const DB_FILE = path.join(process.cwd(), "src", "db.json"); // Ruta correcta

// Cargar datos desde el archivo JSON
export const loadDB = async () => {
    try {
        const data = await fs.readFile(DB_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error cargando la base de datos:", error);
        return { posts: [] };
    }
};

// Guardar datos en el archivo JSON
export const saveDB = async (data) => {
    try {
        await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("❌ Error guardando la base de datos:", error);
    }
};