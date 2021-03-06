from django.db import models
from datetime import datetime
# Create your models here.


class UserInfo(models.Model):  # 사용자 model
    user_name = models.CharField(max_length=30)  # 이름
    user_password = models.CharField(max_length=30)  # 패스워드
    user_email = models.CharField(max_length=50, default='')  # 이메일
    enroll_date = models.DateTimeField('date enrolled')  # 등록일


class Site(models.Model):  # 지점 model
    site_name = models.CharField(max_length=30, blank=False)  # 지점명
    site_code = models.CharField(
        max_length=30, blank=False, primary_key=True)  # 지점코드


class Menu(models.Model):  # 구내식당 메뉴 모델
    # 지점코드 Site 모델을 외래키로 가진다
    id = models.AutoField(primary_key=True)
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    s_date = models.DateField('standard_date')  # 식단 일자
    breakfast_type_1 = models.CharField(max_length=200, blank=True)
    breakfast_type_2 = models.CharField(max_length=200, blank=True)
    breakfast_type_3 = models.CharField(max_length=200, blank=True)
    lunch_type_1 = models.CharField(max_length=200, blank=True)
    lunch_type_2 = models.CharField(max_length=200, blank=True)
    lunch_type_3 = models.CharField(max_length=200, blank=True)
    lunch_type_4 = models.CharField(max_length=200, blank=True)
    lunch_type_5 = models.CharField(max_length=200, blank=True)
    dinner_type_1 = models.CharField(max_length=200, blank=True)
    dinner_type_2 = models.CharField(max_length=200, blank=True)
    dinner_type_3 = models.CharField(max_length=200, blank=True)

    class Meta:
        ordering = ['-s_date']  # 정렬 순서


class AppCode(models.Model):
    code = models.CharField(
        max_length=30, blank=False, primary_key=True)  # 지점코드
    code_name = models.CharField(max_length=30, blank=False)  # 코드명


class ResturantInfo(models.Model):  # 회사 주변 식당
    site_code = models.ForeignKey(Site, on_delete=models.CASCADE)  # 지점코드
    resturant_name = models.CharField(max_length=50, blank=False)  # 식당명
    resturant_code = models.CharField(
        max_length=50, blank=False)  # 식당코드 nhlife_nolbubudae
    resturant_adress = models.CharField(max_length=100, blank=True)  # 주소
    resturant_tel = models.CharField(max_length=15, blank=True)  # 전화번호
    # 식당 유형(한식,일식,중식,양식,기타 -> text로 입력)
    resturant_type = models.CharField(max_length=50, blank=False)
    title_menu = models.CharField(
        max_length=50, blank=False)  # 대표메뉴 (부대찌개, 낙지볶음)
    price = models.CharField(max_length=20, blank=True)
    seat_type = models.CharField(max_length=50, blank=True)  # 좌식, 테이블
    room_is = models.CharField(
        max_length=50, blank=False)  # 룸 여부 (있음, 4/8/12석)
    distance = models.CharField(max_length=10, blank=False)  # 사이트 기준 거리 (100M)
    resturant_desc = models.CharField(max_length=200, blank=True)
    resturant_image = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 대표 이미지1")  # 식당 대표 이미지

    resturant_image_front1 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 전경 이미지1")  # 식당 전경 이미지 1
    resturant_image_front2 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 전경 이미지2")  # 식당 전경 이미지 2
    resturant_image_front3 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 전경 이미지3")  # 식당 전경 이미지 3

    resturant_image_parking1 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 주차장 이미지1")  # 식당 주차장 이미지 1
    resturant_image_parking2 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 주차장 이미지2")  # 식당 주차장 이미지 1

    resturant_image_inside1 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 내부 이미지1")  # 식당 내부 이미지 1
    resturant_image_inside2 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 내부 이미지2")  # 식당 내부 이미지 2
    resturant_image_inside3 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 내부 이미지3")  # 식당 내부 이미지 3

    resturant_image_menu1 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 메뉴판 이미지1")  # 식당 메뉴판 이미지 1
    resturant_image_menu2 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 메뉴판 이미지2")  # 식당 메뉴판 이미지 2
    resturant_image_menu3 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 메뉴판 이미지3")  # 식당 메뉴판 이미지 3

    resturant_image_food1 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 음식 이미지1")  # 식당 메뉴 이미지 1
    resturant_image_food2 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 음식 이미지2")  # 식당 메뉴 이미지 2
    resturant_image_food3 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 음식 이미지3")  # 식당 메뉴 이미지 3
    resturant_image_food4 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 음식 이미지4")  # 식당 메뉴 이미지 4
    resturant_image_food5 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 음식 이미지5")  # 식당 메뉴 이미지 5

    resturant_image_room1 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 룸 이미지1")  # 식당 룸 이미지 1
    resturant_image_room2 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 룸 이미지2")  # 식당 룸 이미지 2
    resturant_image_room3 = models.FileField(
        upload_to='resturant_image', blank=True, help_text="식당 룸 이미지3")  # 식당 룸 이미지 3

    # 영업시간 (오전 11시~오후 8시)
    operating_time = models.CharField(max_length=50, blank=True)
    enroll_date = models.DateTimeField('date enrolled')  # 등록일

    class Meta:
        ordering = ['-enroll_date']  # 정렬 순서


class Notice(models.Model):
    title = models.CharField(max_length=100, blank=False,
                             help_text="제목을 입력하세요")  # 제목
    content = models.TextField(blank=False, help_text="내용을 입력하세요")  # 내용
    enroll_date = models.DateTimeField('date enrolled')  # 등록일

    class Meta:
        ordering = ['-enroll_date']  # 정렬 순서


class Advertisement(models.Model):
    link = models.CharField(max_length=300, blank=False,
                            help_text="링크를 입력하세요")  # 링크
    useyn = models.CharField(max_length=1, blank=False,
                             default='y', help_text="사용여부를 입력하세요(기본값은 y입니다)")  # 내용
    item_name = models.CharField(
        max_length=50, blank=False, help_text="상품명을 입력하세요")  # 상품명
    enroll_date = models.DateTimeField('date enrolled')  # 등록일

    class Meta:
        ordering = ['-enroll_date']  # 정렬 순서


class MenuReview(models.Model):
    site_code = models.CharField(
        max_length=30, blank=True)  # 지점코드
    site_name = models.CharField(max_length=30, blank=True)  # 지점명
    s_date = models.DateField('standard_date')  # 식단 일자
    email = models.TextField(blank=True)  # 이메일
    opinion = models.TextField(blank=True)  # 의견
    # 등록일
    enroll_date = models.DateTimeField(default=datetime.now(), blank=True)

    class Meta:
        ordering = ['-enroll_date']  # 정렬 순서
