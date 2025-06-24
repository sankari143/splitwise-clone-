from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app import schemas, models
from app.database import Base, engine, get_db
from app.crud import create_group

app = FastAPI()

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
async def root():
    return {"message": "Splitwise Clone Backend running"}

@app.post("/groups")
async def create_new_group(group: schemas.GroupCreate, db: AsyncSession = Depends(get_db)):
    return await create_group(db, group)