from pydantic import BaseModel
from typing import List
from enum import Enum

class SplitType(str, Enum):
    equal = "equal"
    percentage = "percentage"

class UserCreate(BaseModel):
    name: str

class UserOut(BaseModel):
    id: int
    name: str
    class Config:
        orm_mode = True

class GroupCreate(BaseModel):
    name: str
    user_ids: List[int]

class GroupOut(BaseModel):
    id: int
    name: str
    users: List[UserOut]
    class Config:
        orm_mode = True

class ExpenseCreate(BaseModel):
    description: str
    amount: float
    paid_by: int
    split_type: SplitType
    splits: List[dict]  # e.g. [{user_id: 1, percent: 50}]

class ExpenseOut(BaseModel):
    id: int
    description: str
    amount: float
    class Config:
        orm_mode = True

class BalanceOut(BaseModel):
    user_id: int
    owes: List[dict]  # [{to_user_id: int, amount: float}]