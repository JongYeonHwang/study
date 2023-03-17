'use strict';

const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,                  // ture 값이면 createAt과 updateAt 컬럼이 자동으로 추가되어 생성, 수정시간이 자동등록된다.
            underscored: false,                 // sequelize의 기본 네이밍규칙인 camel case를 snake case로 바꾸는 옵션
            modelName: 'User',                  // 모델 이름을 설정 할 수 있다.
            tableName: 'users',                 // 실제 데이터베이스의 테이블 모델 ( 소문자 및 복수형 )
            paranoid: false,                    // ture 값이면 deletedAt 컬럼 생성, 삭제시 지워지지않고 지운 시간이 기록되며 조회시에는 null인 값만 조회 (탈퇴회원의 정보 보존 등)
            charset: 'utf8',                    // 한글입력을 위한 설정
            collate: 'utf8_general_ci',         // 한글입력을 위한 설정 이모티콘까지 입력하고 싶다면 utf8 대신 utf8mb4을 입력
        });
    }

    static associate(db) {}
};

module.exports = User;

// static initiate 메서드는 테이블에 대한 설정이며 첫번째 인수로는 컬럼에 대한 설정, 두번째 인수로는 테이블 자체에 대한 설정
// static associate 메서드는 다른 모델과의 관계를 적는다.