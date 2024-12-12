"""empty message

Revision ID: 20978dd5bcfc
Revises: 8c7c4aee181b
Create Date: 2024-12-12 14:49:28.771906

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '20978dd5bcfc'
down_revision = '8c7c4aee181b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('teachers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('teachers', schema=None) as batch_op:
        batch_op.drop_column('price')

    # ### end Alembic commands ###
