from app import models, schemas

async def create_group(db, group: schemas.GroupCreate):
    new_group = models.Group(name=group.name)
    db.add(new_group)
    await db.flush()

    for uid in group.user_ids:
        db.add(models.GroupUser(group_id=new_group.id, user_id=uid))

    await db.commit()
    await db.refresh(new_group)
    return new_group