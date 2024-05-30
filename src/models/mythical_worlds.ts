import client from "../database";

export type Weapon = {
    id: number;
    name: string;
    description: string;
    };

export class MythicalWeaponStore {
    async index(): Promise<Weapon[]> {
        try {
          // @ts-ignore
          const conn = await Client.connect()
          const sql = 'SELECT * FROM mythical_worlds'
    
          const result = await conn.query(sql)
    
          conn.release()
    
          return result.rows 
        } catch (err) {
          throw new Error(`Could not get mythical_worlds. Error: ${err}`)
        }
      }
    
      async show(id: string): Promise<Weapon> {
        try {
        const sql = 'SELECT * FROM mythical_worlds WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()
    
        const result = await conn.query(sql, [id])
    
        conn.release()
    
        return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find mythical_worlds ${id}. Error: ${err}`)
        }
      }
    
      async create(b: Weapon): Promise<Weapon> {
          try {
        const sql = 'INSERT INTO mythical_worlds (name, description) VALUES($1, $2) RETURNING *'
        // @ts-ignore
        const conn = await Client.connect()
    
        const result = await conn
            .query(sql, [b.name, b.description])
    
        const book = result.rows[0]
    
        conn.release()
    
        return book
          } catch (err) {
              throw new Error(`Could not add new book ${b.name}. Error: ${err}`)
          }
      }
    
      async delete(id: string): Promise<Weapon> {
          try {
        const sql = 'DELETE FROM mythical_worlds WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()
    
        const result = await conn.query(sql, [id])
    
        const book = result.rows[0]
    
        conn.release()
    
        return book
          } catch (err) {
              throw new Error(`Could not delete mythical_worlds ${id}. Error: ${err}`)
          }
      }
    }