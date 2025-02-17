from rest_framework import serializers
from .models import CustomUser

# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('id', 'email', 'full_name', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = CustomUser.objects.create_user(
#             email=validated_data['email'],
#             full_name=validated_data['full_name'],
#             password=validated_data['password']
#         )
#         return user
class RegisterSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField(max_length=255)  # Add the fullname field

    class Meta:
        model = CustomUser
        fields = ['fullname', 'email', 'password']

    def create(self, validated_data):
        fullname = validated_data.pop('fullname')
        user = CustomUser.objects.create_user(**validated_data)
        user.profile.fullname = fullname  # Assuming you have a profile model that stores the fullname
        user.profile.save()  # Save the profile
        return user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'full_name')
