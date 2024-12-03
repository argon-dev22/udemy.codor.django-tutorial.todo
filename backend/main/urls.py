from django.urls import path
from .views import TaskList
from .views import TaskDetail

urlpatterns = [
    path('tasks/', TaskList.as_view()),
    path('tasks/<int:pk>/', TaskDetail.as_view()),
]
